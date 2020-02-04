import styled from 'styled-components';

export const Card = styled.div(
  ({ theme }) => `
    display: flex;
    align-items: center;
    // justify-content: space-between;

    position: relative;

    padding: 16px;
    width: 100%;

    border-radius: 4px;
    border: 1px solid #e0e7ff;

    cursor: pointer;
    text-decoration: none;

    background-color: #fff;

    transition: border-color ease 200ms;

    &:hover {
      border-color: #2e5bff;
    }

   @media only screen and (min-width: 1024px) {
     padding: 24px
   }
  `
);

export const Image = styled.div(
  ({ theme }) => `
    display: block;

    margin-right: 16px;

    width: 64px;
    height: 64px;

    border-radius: 4px;
  `
);

export const Content = styled.div(({ theme }) => ``);

export const Title = styled.h2(
  ({ theme }) => `
    display: block;

    color: #2e384d;

    font-size: 14px;
    font-weight: 600;
  `
);

export const Description = styled.div(
  ({ theme }) => `
    display: -webkit-box;

    overflow: hidden;

    color: #8798ad;

    font-size: 14px;

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `
);
// export const Card = styled.div(({ theme }) => ``);
