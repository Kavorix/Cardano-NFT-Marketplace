import styled from 'styled-components';


interface CustomTextAreaStyleType {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: any;
  type?: string;
  gap?: string;
  color?: string;
  justifyContent?: string;
  direction?: string;
  alignItems?: string;
  marginBottom?: string;
  marginTop?: string;
  maxWidth?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  smDirection?: string;
  smMarginBottom?: string;
  smMarginTop?: string;
  smGap?: string;
  smFontSize?: string;
  smLineHeight?: string;
  smFontWeight?: string;
  padding?: string;
  smPadding?: string;
  border?: string;
  borderRadius?: string;
  height?: string;
  smHeight?: string;
  maxLength?: number;
  fontFamily?: string;
}


export const CustomTextAreaStyle = styled.textarea<CustomTextAreaStyleType>`
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  width: 100%;
  background-color: #CECECE;
  color: ${(props) => props.color || '#767676'};
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '0px'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
  margin-top: ${(props) => props.marginTop || '0px'};
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '18px'};
  line-height: ${(props) => props.lineHeight || '22px'};
  padding: ${(props) => props.padding || '16px 20px'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '3px'};
  font-family: ${(props) => props.fontFamily ? props.fontFamily: 'Open Sans'};
  &.three-dots{
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
  &:active{
    border: none;
    outline: none;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: ${(props) => props.smMarginBottom || '0px'};
    margin-top: ${(props) => props.smMarginTop || '0px'};
    gap: ${(props) => props.smGap || props.gap};
    font-weight: ${(props) => props.smFontWeight || '400'};
    font-size:${(props) => props.smFontSize || '18px'};
    line-height: ${(props) => props.smLineHeight || '26px'};
    padding: ${(props) => props.smPadding};
    height: ${(props) => props.smHeight};
  }
`
const CustomTextArea = ({
  placeholder,
  maxWidth,
  color,
  direction,
  justifyContent,
  alignItems,
  gap,
  marginBottom,
  marginTop,
  fontWeight,
  fontSize,
  lineHeight,
  smMarginBottom,
  smMarginTop,
  smGap,
  smFontWeight,
  smFontSize,
  smLineHeight,
  className,
  type,
  value,
  onChange,
  border,
  borderRadius,
  padding,
  smPadding,
  height,
  smHeight,
  maxLength
}: CustomTextAreaStyleType) => {
  return (
    <CustomTextAreaStyle
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      maxWidth={maxWidth}
      color={color}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      marginBottom={marginBottom}
      marginTop={marginTop}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      smMarginBottom={smMarginBottom}
      smMarginTop={smMarginTop}
      smGap={smGap}
      smFontWeight={smFontWeight}
      smFontSize={smFontSize}
      smLineHeight={smLineHeight}
      className={className}
      border={border}
      borderRadius={borderRadius}
      padding={padding}
      smPadding={smPadding}
      height={height}
      smHeight={smHeight}
    />
  )
}

export default CustomTextArea;