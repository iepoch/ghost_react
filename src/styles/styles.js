import styled from 'styled-components'



export const Main = styled.div`

span {

margin: 10px 10px;

}
h2{
white-space: nowrap;
font-size: 16px;
font-weight: bold;
color: black;
margin: 10px 10px;
cursor: pointer;
 width: 40%;
overflow: hidden;
text-overflow: ellipsis;
}
p {
overflow: hidden;
line-height: 10px;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 7;
-webkit-box-orient: vertical;
}
hr {
width: 10%;
border: 0.5px solid #ccc;
}

 `
 
export const Glitch = styled.img`
>.glitch {
  color: white;
  font-size: 100px;
  position: relative;
  width: 400px;
  margin: 0 auto;
}
@keyframes noise-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}% 0 #{$bottom}%  0);
    }
  }
}
>.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 red;
  top: 0;
  color: white;
  background: black;
  overflow: hidden;
  animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}% 0 #{$bottom}%  0);
    }
  }
}
>.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue;
  top: 0;
  color: white;
  background: black;
  overflow: hidden;
  animation: noise-anim-2 15s infinite linear alternate-reverse;
}


`
export const Container = styled.div`

iframe {
    border: 1px solid yellow;
    height: 20%;
    width: 20%;
    display: flex;
    justify-content: center;

}

   img {

     margin:20px;
     width: 50%;
     height: 50%;
 
   }
   }
   span {

     margin: 10px 10px;

   }
   h2{
     white-space: nowrap;
     font-size: 20px;
     font-weight: bold;
     color: white;
     margin: 10px 10px;
     cursor: pointer;
      width: 40%;
     overflow: hidden;
     text-overflow: ellipsis;
     }
     code {
     font-family: Monaco, monospace;
     font-size: 12px;
     line-height: 100%;
     background-color: orange;
     padding: 0.2em;
     letter-spacing: -0.05em;
     word-break: normal;
     border-radius: 5px;
   }
 `;
