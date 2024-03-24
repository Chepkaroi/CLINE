const page0=document.getElementById("page0");
const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");
const container = document.querySelector('.container3');

container.classList.toggle('active');

function showPage3(){
    page3.style.display="block";
    page1.style.display="none";
    page2.style.display="none";
    page0.style.display="none";
}

function showPage2(){
    page2.style.display="block";
    page1.style.display="none";
    page3.style.display="none";
    page0.style.display="none";
}

function showPage1(){
    page1.style.display="block";
    page3.style.display="none";
    page2.style.display="none";
    page0.style.display="none";
}

function showPage0(){
    page0.style.display="block";
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
}