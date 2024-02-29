
import { StyledDiv } from "./MainContainer.styles"
import SingleContainer from "../single-container/SingleContainer"
import Title from "../title/Title"
import { StyledImg } from "../img/img.styles"
import Text from "../text/Text"
import { StyledButton } from "../button/button.styles"

const MainContainer =({$display, $bgcolor})=>{
    return <> <StyledDiv $display={$display} $bgcolor={$bgcolor}>
        <SingleContainer $bgColor='#E28624' $display='flex'>
            <StyledImg src='/images/icon-sedans.svg'></StyledImg>
            
    <Title>SEDANS</Title>
    <Text>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</Text>
    <StyledButton $color='#E28624'>Learn More</StyledButton>
        </SingleContainer>
        
        <SingleContainer $bgColor='#006971' $display='flex'>
        <StyledImg src='/images/icon-suvs.svg'></StyledImg>
        <Title>SUVS</Title>
        <Text>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</Text>
        <StyledButton $color='#006971'>Learn More</StyledButton>
        </SingleContainer>
        <SingleContainer $bgColor='#004140' $display='flex'>
        <StyledImg src='/images/icon-luxury.svg'></StyledImg>
        <Title>LUXURY</Title>
        <Text>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. </Text>
        <StyledButton $color='#004140'>Learn More</StyledButton>
        </SingleContainer>
    </StyledDiv>

    </>
}
export default MainContainer