import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import styled, { css } from "styled-components";

import { Button } from "react-bootstrap";

function App() {
	// Creando los estilos.
	const Title = styled.h1`
		font-size: 1.5rem;
		text-align: center;
		color: palevioletred;
	`;

	//Para enviarle props al componente para combiar el comportamiento tenemos que hacer uso de
	//una función flecha que recive los props e interactua mediante ellos.
	const Wrapper = styled.section`
		display: flex;
		justify-content: space-evenly;
		padding: 4em;
		background: ${(props) => (props.light ? "papayawhip" : "black")};
	`;

	const ButtonStandard = styled.button`
		text-decoration: none;
		padding: 1em;
		background-color: #1d1d1d;
		color: green;
		border: 1px solid grey;
		border-radius: 0.3rem;
	`;

	// Con la función styled podemos pedir los estilos del componente que reciba como argumento
	// En este caso para el componente "ButtonChild" reciviremos todos los estilos del componente "ButtonStandard"
	const ButtonChild = styled(ButtonStandard)`
		background-color: #000;
		color: red;
	`;

	// Otra de las cosas que podemos hacer es utilizar componentes de librerias externas y modificarlos.
	// En este caso estamos llamando al componente Button de react-bootstrap y le estamos dando el estilo que deseamos a partir
	// de los estilos que ya trae la libreria. Es realmente útil si queremos realizar cambios de ciertos aspectos de algunas librerias
	// sin tener colisión en css por las caracteristicas uqe nos ofrece styled-components.
	const BootstrapButton = styled(Button)`
		background-color: #1d1d1d;
		border: 1px solid red;
		color: red;
	`;

	// Para modificar los estilos de los componentes mediante su pseudoclase y estados tenemos que hacer uso del ampelsan "&" de igualforma
	// se puede ahondar aquí https://styled-components.com/docs/basics#coming-from-css
	const ButtonPseudo = styled(Button)`
		background-color: #1d1d1d;
		color: red;
		border: 1px solid red;
		transition: all 1s;
		&:hover {
			background-color: red;
			color: #fff;
			border: 1px solid #fff;
		}
	`;

	//Ejemplo sencillo de como utilizar styled-components para crear elementos con distintos temas.
	const Input = styled.input.attrs({ type: "checkbox" })``;

	const Label = styled.span`
		align-items: center;
		display: flex;
		gap: 8px;
		margin-bottom: 8px;
	`;

	const LabelText = styled.span`
		${(props) => {
			switch (props.$mode) {
				case "dark":
					return css`
						background-color: black;
						color: white;
						${Input}:checked + && {
							color: blue;
						}
					`;
				default:
					return css`
						background-color: white;
						color: black;
						${Input}:checked + && {
							color: red;
						}
					`;
			}
		}}
	`;

	return (
		<Container>
			<h1 className="display text-center">Aprendiendo styled-components en React</h1>
			<hr />
			<p>
				Styled components nos permite trabajar de uan forma muy eficaz con react para darle estilos y evitar
				ciertos problemas que podriamos tener trabajando con CSS plano por separado.
			</p>
			<p>
				Todas estas características las podemos ver en esta página:{" "}
				<a
					href="https://styled-components.com/docs/basics#motivation"
					target="_blank"
					rel="noopener noreferrer"
				>
					Styled Components motivations
				</a>
			</p>
			<h3>Usando styled components</h3>
			<small className="text-secondary">
				Esto se verá mejor en el código la vista es solo para mostrar como se ven las cosas
			</small>

			{/* Stylized Component */}

			<h4>Usando styled components</h4>
			<Wrapper>
				<Title>Hola</Title>
			</Wrapper>

			<h4 className="mt-4">Leyendo props para cambiar comportamiento de los components.</h4>
			<Wrapper light>
				<Title>Hola</Title>
			</Wrapper>

			<h4>Heredando estilos</h4>
			<Wrapper>
				<ButtonStandard>Boton standard</ButtonStandard>
				<ButtonChild>Boton con estilos heredados</ButtonChild>
			</Wrapper>
			<h4>Modificando el tag del componente estilizado con el prop "as"</h4>
			<small className="text-secondary">
				Esto es útil para cuando tenemos elementos que podrian ser iguales como un Link y un button que tienen
				comportamientos diferentes pero en ciertos aspectos los estilos podrian ser iguales.
			</small>

			<Wrapper>
				{/* Usamos la prop "as" cuando queremos cambiarle el tag al componente estilizado que ya tenemos */}
				<ButtonStandard as="a" href="#">
					"button" transformado a "a" tag
				</ButtonStandard>
			</Wrapper>

			<h4>Modificando estilos de un componente de librerias externas</h4>
			<Wrapper>
				<Button>Boton estandar de bootstrap</Button>
				<BootstrapButton variant="danger">Boton de bootstrap modificado con styled-components</BootstrapButton>
			</Wrapper>
			<h4>Usando Pseudoelementos</h4>
			<Wrapper>
				<ButtonPseudo>Boton con Pseudoclases</ButtonPseudo>
			</Wrapper>
			<h4>Usando temas para componentes</h4>
			<Wrapper>
				<Label>
					<Input defaultChecked />
					<LabelText>Foo</LabelText>
				</Label>
				<Label>
					<Input />
					<LabelText $mode="dark">Foo</LabelText>
				</Label>
				<Label>
					<Input defaultChecked />
					<LabelText>Foo</LabelText>
				</Label>
				<Label>
					<Input defaultChecked />
					<LabelText $mode="dark">Foo</LabelText>
				</Label>
			</Wrapper>
		</Container>
	);
}

export default App;
