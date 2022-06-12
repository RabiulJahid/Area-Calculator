
//get elements
const area_type = document.getElementById ('area_type');
const area_form = document.getElementById ('area_form');
const rec = document.querySelector ('.rec');
const sqar = document.querySelector ('.sqar');
const tri = document.querySelector ('.tri');
const cri = document.querySelector ('.cri');
const details = document.querySelector ('.details');


area_type.onchange = () => {
    // Rectangle
   if (area_type.value == 'Rectangle'){
        rec.style.display = 'block';
   }else{
        rec.style.display = ''; 
   }

//    Square

 if (area_type.value == 'Square'){
    sqar.style.display = 'block';
 }else{
    sqar.style.display = '';
 }

//  Triangle

  if (area_type.value == 'Triangle'){
    tri.style.display = 'block';
  }else{
    tri.style.display = '';
  }

//   Circle\

  if (area_type.value == 'Circle') {
     cri.style.display = 'block';
  }else{
   cri.style.display = '';
  }


}

//form submit

area_form.onsubmit = (e) => {
 e.preventDefault ();
if(area_type.value == 'Rectangle'){
  let length = area_form.querySelector('input[name="length"]').value;
  let width = area_form.querySelector('input[name="width"]').value;

  // console.log(length,width);
  details.innerHTML = areaCal( area_type.value,length,width);

  }else if(area_type.value == 'Square'){
    let sqar = area_form.querySelector('input[name="side"]').value;
    details.innerHTML = areaCal ( area_type.value,sqar);
  }else if(area_type.value == 'Triangle'){

    let base = area_form.querySelector('input[name="base"]').value; 
    let height = area_form.querySelector('input[name="height"]').value;
    details.innerHTML = areaCal(area_type.value,base,height);
  }else if(area_type.value == "Circle"){
   let radius = area_form.querySelector('input[name="radius"]').value;
   details.innerHTML = areaCal(area_type.value, radius);

  }
 

 }