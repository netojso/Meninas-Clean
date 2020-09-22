import styled from 'styled-components';

export const Container = styled.div`
    background-color: rgba(31, 56, 204, 0.1);
    max-width: 960px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      margin: 20px;
      width: 90%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        display: flex;
        align-items: center;

          img {
          width: 120px;
          margin-top: 20px;
        }

        p {
          margin-top: 3px;
          margin-left: -5px;
          font-size: 22px;
          font-weight: 700;
        }

          }
      
          strong {
          text-align: center;
          font-size: 15px;
                }
    
    }


    input {
    
      margin-top: 10px;  
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;  
      width: 90%;
      font-size: 18px;
      font-weight: 700;
      height: 40px;
      border-radius: 5px;
      border: 0;
      text-align: center;
      padding-left: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.40);
    }

    footer {
      margin-top: 30px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 10px 0;
      background: rgba(8, 14, 51, 1);

      svg {
        margin-right: 20px;
      }
    }
`;

export const Menu = styled.div`

  margin-top: 15px;
  width: 100%;
  height: 100%;
  display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Product = styled.div`
  background-color: #FFF;
  width: 80%;
  border-radius: 8px;

  margin-top: 15px;
  padding: 10px;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.info{
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    p {
      font-size: 10px;
      font-weight: 700;
    }
  }

  
`

export const Options = styled.div`

    display: flex;

    button {
      cursor: pointer;
      outline: 0;
      border: 0;
      background: transparent;

      svg {
      margin: 0 6px;
    }

    }
    
`

export const Contact = styled.div`
  margin-left: 20px;

  p, strong {
    font-size: 12px;
    color: #fff;
    margin-top: 6px;
  }

`