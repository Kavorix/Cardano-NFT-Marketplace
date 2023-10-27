import styled from 'styled-components';
interface CustomButtonType {
  text?: string;
  link?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  onClick?: () => void;
  onSubmit?: () => void;
  color?: string;
  type?: string;
  disabled?: boolean;
  borderRadius?: string;
  smWidth?: string;
  smHeight?: string;
  fontSize?: string;
  smFontSize?: string;
  smLineHeight?: string;
  lineHeight?: string;
  fontWeight?: string;
  smFontWeight?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  border?: string;
  activeBgColor?: string;
  marginTop?: string;
  marginBottom?: string;
  fontFamily?: string;
  boxShadow?: string;
  smMarginTop?: string;
}

interface CustomButtonStyleType {
  width?: string;
  height?: string;
  bgColor?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  color?: string;
  disabled?: boolean;
  borderRadius?: string;
  smWidth?: string;
  smHeight?: string;
  fontSize?: string;
  smFontSize?: string;
  smLineHeight?: string;
  lineHeight?: string;
  fontWeight?: string;
  smFontWeight?: string;
  border?: string;
  marginTop?: string;
  marginBottom?: string;
  fontFamily?: string;
  boxShadow?: string;
  smMarginTop?: string;
}

const CustomButtonStyle = styled.button<CustomButtonStyleType>`
    cursor: pointer;
    border: #7E88CA solid 1px;
    max-width: ${(props) => props.width || '171px'};
    width: 100%;
    font-family: ${(props) => props.fontFamily || 'Open Sans'};
    height: ${(props) => props.height || '42px'};
    font-style: normal;
    font-weight: ${(props) => props.fontWeight || '600'};
    font-size: ${(props) => props.fontSize || '18px'};
    line-height: ${(props) => props.lineHeight || '41px'}; 
    color: ${(props) => props.color || 'white'};
    border: ${(props) => props.border || ''};
    background: ${(props) => props.disabled ? '#767676' : props.bgColor || 'linear-gradient(to right, #5769E7 , #3343AE)'};
    border-radius: ${(props) => props.borderRadius || '3px'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.color || '#ffffff'};
    margin-top: ${(props) => props.marginTop};
    box-shadow: ${(props) => props.boxShadow};
    margin-bottom: ${(props) => props.marginBottom};
    &:hover{
      color: ${(props) => props.hoverColor || 'white'};
      background: ${(props) => props.hoverBgColor || '#6073f6'};
    }
    &:disabled{
      cursor: not-allowed; 
      background-color: #767676;
      /* opacity: 0.5;  */
    }
    @media screen and (max-width: 1100px) {
        font-size: 24px;
        line-height: 41px;

    }
    @media screen and (max-width: 768px) {
        max-width: ${(props) => props.smWidth || '98px'};
        
        height: ${(props) => props.smHeight || '42px'};
        font-style: normal;
        font-weight: ${(props) => props.smFontWeight || '600'};
        font-size:${(props) => props.smFontSize || '16px'};
        line-height: ${(props) => props.smLineHeight || '26px'};
        margin-top: ${(props) => props.smMarginTop};
    }
`
const CustomButton = ({ hoverBgColor, boxShadow, fontFamily, text, link, width, bgColor, color, onClick, onSubmit, disabled, type, smHeight, smWidth, borderRadius, height, fontSize, lineHeight, smFontSize, fontWeight, smLineHeight, smFontWeight, hoverColor, border, marginTop, marginBottom, smMarginTop }: CustomButtonType) => {
  return (

    <CustomButtonStyle
      width={width} color={color} onClick={onClick} bgColor={bgColor} onSubmit={onSubmit} disabled={disabled} smHeight={smHeight} smWidth={smWidth} borderRadius={borderRadius} height={height}
      fontSize={fontSize}
      smFontSize={smFontSize}
      fontWeight={fontWeight}
      smFontWeight={smFontWeight}
      lineHeight={smLineHeight}
      smLineHeight={smLineHeight}
      hoverColor={hoverColor}
      border={border}
      marginTop={marginTop}
      marginBottom={marginBottom}
      hoverBgColor={hoverBgColor}
      fontFamily={fontFamily}
      boxShadow={boxShadow}
      smMarginTop = {smMarginTop}
    >
      {text}
    </CustomButtonStyle>
  )
}

export default CustomButton;
