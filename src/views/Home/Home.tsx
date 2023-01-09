import { HomeStyled } from './Home.styled';

// Containers
import Results from '../Results';

function Home() {
	return (
		<HomeStyled id="home">
			<main className="main-content">
				<Results />
			</main>
		</HomeStyled>
	);
}

export default Home;
