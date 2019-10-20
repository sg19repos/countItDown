import styled from "styled-components";

export const SnoozeChipsStyle = styled.div`
    @media (max-width: 400px) {
        width: 50%;
        margin: 1% 0% auto 40%;
    }
    background-color: transparent;
    // border: 1px solid #ddd;
    color: currentColor;
    cursor: pointer;

    padding: 0;
    width: 25%;
    margin: 1% 0% auto 4%;
    text-align: center;
    float: left;

    &:focus {
        outline: 0;
    }
`;

export const Ul = styled.ul`
    width: 100%;
    padding-left: 0%;
    text-align: center;
    margin: auto;
    .MuiGrid-grid-md-8 {
        margin: auto !important;
    }
`;

// export default SnoozeChipsStyle;
