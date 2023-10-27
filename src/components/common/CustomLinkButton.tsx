import styled from 'styled-components';
interface CustomLinkButtonType {
  text?: string;
  link?: string;
  width?: string;
  maxWidth?: string;
  bgColor?: string;
  onClick?: () => void;
  onSubmit?: () => void;
  color?: string;
  type?: string;
  cursor?: string;
  disabled?: boolean;
  height?: string;
  fontFamily?: string;
  marginTop?: string;
  smWidth?: string;
  smHeight?: string;
  borderRadius?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
  smFontSize?: string;
  justifyContent?: string;
  className?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  smLineHeight?: string;
  smFontWeight?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
  textAlign?: string;
  alignItems?: string;
  smMarginTop?: string;
}


const CustomLinkButtonStyle = styled.a<CustomLinkButtonType>`
    cursor: ${(props) => props.cursor || 'pointer'};
    /* border: #7E88CA solid 1px; */
    max-width: ${(props) => props.maxWidth};
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '42px'};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 41px;    
    font-family: ${(props) => props.fontFamily || 'Open Sans'};
    text-align: ${(props) => props.textAlign || 'start'};
    text-wrap: nowrap;
    font-weight: ${(props) => props.fontWeight || '600'};
    font-size: ${(props) => props.fontSize || '16px'};
    line-height: ${(props) => props.lineHeight || '41px'};
    color: ${(props) => props.color || 'white'};
    background: ${(props) => props.bgColor || 'linear-gradient(to right, #5769E7 , #3343AE)'};
    margin-top: ${(props) => props.marginTop || '0px'};
    border-radius: ${(props) => props.borderRadius || '4px'};
    display: flex;
    align-items: ${(props) => props.alignItems || 'center'};
    justify-content: ${(props) => props.justifyContent || 'center'};
    text-decoration: none;
    border-right: ${(props) => props.borderRight};
    border-left: ${(props) => props.borderLeft};
    border-top: ${(props) => props.borderTop};
    border-bottom: ${(props) => props.borderBottom};
    &:hover{
      color: ${(props) => props.hoverColor || 'white'};
      background: ${(props) => props.hoverBgColor || '#6073f6'};
    }
    &:active{
      background: '#6b6b6b';
    }
    &:disabled{
        cursor: not-allowed; 
        background-color: #767676;
        /* opacity: 0.5;  */
    }
    @media screen and (max-width: 768px) {
        max-width: ${(props) => props.smWidth || '100%'};
        height: ${(props) => props.smHeight};
        margin-top: ${(props) => props.smMarginTop || '0px'};
        font-style: normal;
        font-weight: ${(props) => props.smFontWeight};
        font-size:${(props) => props.smFontSize || '18px'};
        line-height: ${(props) => props.smLineHeight || '26px'};
    }
`

const CustomLinkButton = ({
  text,
  link, width, bgColor, color, onClick, onSubmit, type, cursor,
  disabled, height, marginTop, smHeight, smWidth, borderRadius,
  fontWeight,
  fontSize,
  lineHeight,
  smFontSize,
  justifyContent,
  className,
  hoverColor,
  hoverBgColor,
  smLineHeight,
  smFontWeight,
  borderTop,
  borderLeft,
  borderBottom,
  borderRight,
  textAlign,
  alignItems,
  fontFamily,
  maxWidth,
  smMarginTop
}: CustomLinkButtonType) => {
  return (
    <CustomLinkButtonStyle
      smLineHeight={smLineHeight}
      href={link}
      width={width}
      color={color}
      onClick={onClick}
      bgColor={bgColor}
      onSubmit={onSubmit}
      cursor={cursor}
      height={height}
      maxWidth={maxWidth}
      marginTop={marginTop}
      disabled={disabled}
      smHeight={smHeight}
      smWidth={smWidth}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      smFontSize={smFontSize}
      justifyContent={justifyContent}
      className={className}
      hoverBgColor={hoverBgColor}
      hoverColor={hoverColor}
      smFontWeight={smFontWeight}
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderRight={borderRight}
      borderLeft={borderLeft}
      textAlign={textAlign}
      alignItems={alignItems}
      fontFamily={fontFamily}
      smMarginTop={smMarginTop}
      // target='_blank'
    >
      {text}
    </CustomLinkButtonStyle>
  )
}

export default CustomLinkButton;