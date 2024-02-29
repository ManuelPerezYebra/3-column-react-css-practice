import { StyledSingleContainer } from "./singlecontainer.styles"


const SingleContainer =({$display, $bgColor, children})=>{
    return <StyledSingleContainer $display={$display} $bgColor={$bgColor}>
        {children}
    </StyledSingleContainer>
}
export default SingleContainer