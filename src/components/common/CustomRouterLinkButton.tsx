import { Link } from 'react-router-dom';
import styled from 'styled-components';
interface CustomRouterLinkButtonType {
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
  padding?: string;
  smPadding?: string;
}


const CustomRouterLinkButtonStyle = styled(Link) <CustomRouterLinkButtonType>`
    cursor: ${(props) => props.cursor || 'pointer'};
    max-width: ${(props) => props.maxWidth};
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 41px;    
    font-family: ${(props) => props.fontFamily || 'Inconsolata'};
    text-align: ${(props) => props.textAlign || 'start'};
    text-wrap: nowrap;
    padding: ${(props) => props.padding};
    font-weight: ${(props) => props.fontWeight || '700'};
    font-size: ${(props) => props.fontSize || '21px'};
    line-height: ${(props) => props.lineHeight || 'normal'};
    color: ${(props) => props.color || 'black'};
    background: ${(props) => props.bgColor || 'none'};
    margin-top: ${(props) => props.marginTop || '0px'};
    border-radius: ${(props) => props.borderRadius || '4px'};
    display: flex;
    align-items: ${(props) => props.alignItems || 'center'};
    justify-content: ${(props) => props.justifyContent || 'start'};
    text-decoration: none;
    border-right: ${(props) => props.borderRight};
    border-left: ${(props) => props.borderLeft};
    border-top: ${(props) => props.borderTop};
    border-bottom: ${(props) => props.borderBottom};
    letter-spacing: -0.105px;
    &:hover{
      color: ${(props) => props.hoverColor || '#6b6b6b'};
      background-color: ${(props) => props.hoverBgColor};;
    }
    &:active{
      background: '#6b6b6b';
    }
    &:disabled{
        cursor: not-allowed; 
        opacity: 0.5; 
    }
    @media screen and (max-width: 768px) {
        max-width: ${(props) => props.smWidth};
        width: 100%;
        height: ${(props) => props.smHeight};
        font-style: normal;
        font-weight: ${(props) => props.smFontWeight};
        font-size:${(props) => props.smFontSize || '18px'};
        line-height: ${(props) => props.smLineHeight || 'normal'};
    }
`

const CustomRouterLinkButton = ({
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
  padding,
  maxWidth,
  smPadding
}: CustomRouterLinkButtonType) => {
  return (
    <CustomRouterLinkButtonStyle
      smLineHeight={smLineHeight}
      to={link}
      width={width}
      color={color}
      onClick={onClick}
      bgColor={bgColor}
      onSubmit={onSubmit}
      cursor={cursor}
      height={height}
      marginTop={marginTop}
      disabled={disabled}
      smHeight={smHeight}
      smWidth={smWidth}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      maxWidth = {maxWidth}
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
      padding={padding}
      smPadding={smPadding}
    >
      {text}
    </CustomRouterLinkButtonStyle>
  )
}

export default CustomRouterLinkButton;