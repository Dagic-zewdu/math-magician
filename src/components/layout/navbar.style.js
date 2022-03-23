import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
height: 70px;
padding: 10px 30px;
`;

export const LogoContainer = styled(Link)`
 font-size: 40px;
 text-decoration: none;
 color: #111;
`;

export const LinkContainer = styled.div`
display:flex;
justify-content: space-between;
`;
