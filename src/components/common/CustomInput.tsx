import styled from 'styled-components';

interface CustomInputStyleType {
  className?: string;
  placeholder?: string;

  value?: string | number;
  onChange?: any;
  type?: string;
  checked?: boolean;

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
  bgColor?: string;
  height?: string;
  maxLength?: number;
  disabled?: boolean;
  min?: number;
  max?: number;
  textAlign?: string
}


export const CustomInputStyle = styled.input<CustomInputStyleType>`
  max-width: ${(props) => props.maxWidth};
  width: 100%;
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
  background: ${(props) => props.bgColor ? props.bgColor: '#cecece'};
  height: ${(props) => props.height};
  text-align: ${(props) => props.textAlign || 'left'};
  font-family: 'Open Sans';
  &.three-dots{
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: ${(props) => props.smMarginBottom || '0px'};
    margin-top: ${(props) => props.smMarginTop || '0px'};
    height: 52px;
    gap: ${(props) => props.smGap || props.gap};
    font-weight: ${(props) => props.smFontWeight || '400'};
    font-size:${(props) => props.smFontSize || '18px'};
    line-height: ${(props) => props.smLineHeight || '26px'};
    padding: ${(props) => props.smPadding};
  }
`
const CustomInput = ({
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
  bgColor,
  height,
  checked,
  maxLength,
  disabled,
  min,
  max,
  textAlign
}: CustomInputStyleType) => {
  return (
    <CustomInputStyle
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
      bgColor={bgColor}
      height={height}
      checked={checked}
      disabled ={disabled}
      min = {min}
      max = {max}
      textAlign = {textAlign}
    />
  )
}

export default CustomInput;