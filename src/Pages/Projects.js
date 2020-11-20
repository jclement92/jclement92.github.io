import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Ripples from 'react-ripples'
// import Form from 'react-bootstrap/Form';

const Projects = () => {
	return (
		<div>
			{/* <div className="App">
				<Form inline>
					<Form.Label style={{ margin: 20 }} className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
						Oh, you made a(n)
  				</Form.Label>
					<Form.Control
						as="select"
						className="my-1 mr-sm-2"
						id="inlineFormCustomSelectPref"
						custom
					>
						<option value="0">Choose...</option>
						<option value="1">Voice VR</option>
						<option value="2">Florida Man App</option>
						<option value="3">Instagram Clone</option>
					</Form.Control>
				project? That's interesting.
				&nbsp;
				<Button type="submit" className="my-1">
						Learn more
  				</Button>
				</Form>
				<br />
			</div> */}
			<div className="center">
				<Card border="light" style={{ width: "90%", margin: 10 }}>
					<CardDeck>
						<Card>
							<Card.Img variant="top" src="https://holder.ninja/400x300.svg" />
							<Card.Body>
								<Card.Title>Voice VR</Card.Title>
								<Card.Text>
									Experience Virtual Reality! Use your voice to interact with content.
			</Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant="top" src="https://holder.ninja/400x300.svg" />
							<Card.Body>
								<Card.Title>Florida Man Challenge App</Card.Title>
								<Card.Text>
									Learn about Florida's craziest stories. Enter your birthday and share the results with your friends, too!
								</Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant="top" src="https://holder.ninja/400x300.svg" />
							<Card.Body>
								<Card.Title>Instagram Clone</Card.Title>
								<Card.Text>
									Instagram, Part II!
									<br />
									<br />
									<small>Not affiliated with the real Instagram in any way. This project was used for educational purposes.</small>
			</Card.Text>
							</Card.Body>
						</Card>
					</CardDeck>
					<br />

					<CardDeck>
						<Card>
							<Card.Img src="https://holder.ninja/400x300.svg" />
							<Card.Body>
								<Card.Title>Library Database</Card.Title>
								<Card.Text>
									Ever wanted to keep track of your books? Enter the Library Database!
			</Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant="top" src="https://holder.ninja/400x300.svg" />
							<Card.Body>
								<Card.Title>Notaker</Card.Title>
								<Card.Text>
									Take notes on the go
			</Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant="top" src="https://holder.ninja/400x300.svg" />
							<Card.Body>
								<Card.Title>FriendzOnly</Card.Title>
								<Card.Text>
									A Social App that brings friends together
					</Card.Text>
							</Card.Body>
						</Card>
					</CardDeck>
					<br />

					<CardDeck>
						<Card>
							<Card.Img src="https://holder.ninja/400x300.svg" />
							<Card.Body>
								<Card.Title>Covid-19 South Florida</Card.Title>
								<Card.Text>
									Keep track of Covid-19 cases in South Florida. Learn about the latest hotspots in the area.
			</Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant="top" src="https://holder.ninja/400x300.svg" />
							<Card.Body>
								<Card.Title>Easter Bunny Egg Hunt</Card.Title>
								<Card.Text>
									Cute game involving bunnies in a house
			</Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img variant="top" src="https://holder.ninja/400x300.svg" />
							<Card.Body>
								<Card.Title>Movies Api (Future)</Card.Title>
								<Card.Text>
									Coming soon!
			</Card.Text>
							</Card.Body>
						</Card>
						
					</CardDeck>
				</Card>
			</div>

		</div>
	);
}

export default Projects;