function toggleMenu(){document.getElementById('navLinks').classList.toggle('open')}
function sendQuote(e){
 e.preventDefault();
 const name=document.getElementById('name').value;
 const company=document.getElementById('company').value;
 const phone=document.getElementById('phone').value;
 const email=document.getElementById('email').value;
 const service=document.getElementById('service').value;
 const location=document.getElementById('location').value;
 const details=document.getElementById('details').value;
 const subject=encodeURIComponent('Commercial Quote Request - '+(company||name));
 const body=encodeURIComponent(`Name: ${name}
Company/Property: ${company}
Phone: ${phone}
Email: ${email}
Service: ${service}
Property Location: ${location}

Details:
${details}`);
 window.location.href=`mailto:fulllawnmaitenanceandcleaning@gmail.com?subject=${subject}&body=${body}`;
}