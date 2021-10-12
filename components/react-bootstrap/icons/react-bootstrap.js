import React from "react";
import Image from "react-bootstrap/Image";
import url from "./url";

export function _Sample({title = "Sample Image",src = url.sample,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}

export function _Npm({title = "NPM",src = url.npm,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Github({title = "Github",src = url.github,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Book({title = "NPM",src = url.npm,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function Rating(props) {
  const rating = props.rating;
  const width = props.width;
  if (rating === 1) {
    return <_Start width={width} />;
  }
  if (rating === 2) {
    return (
      <div>
        <_Start width={width} />
        <_Start width={width} />
      </div>
    )
  } 
  if (rating === 3) {
    return (
      <div>
        <_Start width={width} />
        <_Start width={width} />
        <_Start width={width} />
      </div>
    )
  } 
  if (rating === 4) {
    return (
      <div>
        <_Start width={width} />
        <_Start width={width} />
        <_Start width={width} />
        <_Start width={width} />
      </div>
    )
  } 
  if (rating === 5) {
    return (
      <div>
        <_Start width={width} />
        <_Start width={width} />
        <_Start width={width} />
        <_Start width={width} />
        <_Start width={width} />
      </div>
    )
  } 
  else {
    return null;
  }
}
export function _Start({title = "",src = url.start,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Clipboard({title = "",src = url.clipboard,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Youtube({title = "",src = url.youtube,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Web({title = "Official Web",src = url.web,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Hamburger({title = "",src = url.hamburger,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _FriedEgg({title = "",src = url.friedEgg,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Cheese({title = "",src = url.cheese,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Carrot({title = "",src = url.carrot,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Cake({title = "",src = url.cake,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Bread({title = "",src = url.bread,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Beer({title = "",src = url.beer,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Beer_2({title = "",src = url.beer_2,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Beer3({title = "",src = url.beer_3,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Donut({title = "",src = url.donut,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Meat({title = "",src = url.meat,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Lollipop({title = "",src = url.lollipop,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _IceCream({title = "",src = url.iceCream,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _HotDog({title = "",src = url.hotDog,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _FrenchFries({title = "",src = url.frenchFries,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _MilkShake({title = "",src = url.milkShake,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Picnic({title = "",src = url.picnic,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Spahgetti({title = "",src = url.spahgetti,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Pizza({title = "",src = url.pizza,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Taco({title = "",src = url.taco,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _CoffePot({title = "",src = url.coffePot,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Broccoli({title = "",src = url.broccoli,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _Avocato({title = "",src = url.avocato,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function _ChineseFood({title = "",src = url.chineseFood,width,height,margin,padding}) {
  return (
    < Imagen
      title={title}
      src={src}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    />
  );
}
export function Imagen(props) {
  const title = props.title;
  const src = props.src ? props.src : url.noIcon;
  const width = props.width ? props.width : "50%";
  const height = props.height ? props.height : "20%";
  const padding = props.padding ? props.padding : "0";
  const margin = props.margin ? props.margin : "0";
  const alt = props.alt;
  return (
    <Image
      title={title}
      alt={alt}
      src={src}
      style={{ width: width ,height: height,margin: margin,padding: padding}}
    />
  );
}