import styled from 'styled-components';

const Container = styled.div`
    --containerWidth: 60px;
    @media (min-width:800px){
        --containerWidth: 80px;
    }
    @media (min-width:1600px){
        --containerWidth: 100px;
    }
    --gapWidth: calc(var(--containerWidth) / 8);
    --barWidth: calc((var(--containerWidth) - 4 * var(--gapWidth)) / 3);
    --barOneLeft: var(--gapWidth);
    --barTwoLeft: calc(2 * var(--gapWidth) + var(--barWidth));
    --barThreeLeft: calc(3 * var(--gapWidth) + 2 * var(--barWidth));

    --containerHeight: var(--containerWidth);
    --initailGapHeight: calc(var(--containerHeight) / 10);
    --inititalBarHeight: calc(var(--containerHeight) - 2 * var(--initailGapHeight));
    --finalBarHeight: calc(var(--inititalBarHeight) / 2 );
    --finalGapHeight: calc((var(--containerHeight) - var(--finalBarHeight)) / 2);

    margin: 0 auto;
    position: relative;
    width: var(--containerWidth);
    height: var(--containerHeight);

div {
    display: inline-block;
    position: absolute;
    width: var(--barWidth);
    background: white;
    animation: loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

div:nth-child(1) {
    left: var(--barOneLeft);
    animation-delay: -0.24s;
}

div:nth-child(2) {
    left: var(--barTwoLeft);
    animation-delay: -0.12s;
}

div:nth-child(3) {
    left: var(--barThreeLeft);
    animation-delay: 0;
}

@keyframes loading {
    0% {
        top: var(--initailGapHeight);
        height: var(--inititalBarHeight);
    }

    50%, 100% {
        top: var(--finalGapHeight);
        height: var(--finalBarHeight);
    }
}

`;



const LoadingAnimation = () => {

    return (
        <Container>
            <div></div>
            <div></div>
            <div></div>
        </Container>
    );
};


export default LoadingAnimation;