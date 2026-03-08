let donorDetails = [

{
name:"Arun",
blood:"A+",
city:"Chennai",
address:"Anna Nagar, Chennai",
contact:"9876543210",
lastDonation:"2024-11-01",
rare:"No"
},

{
name:"Kumar",
blood:"O+",
city:"Chennai",
address:"T Nagar, Chennai",
contact:"9876501234",
lastDonation:"2024-12-20",
rare:"No"
},

{
name:"Rahul",
blood:"B-",
city:"Madurai",
address:"KK Nagar, Madurai",
contact:"9123456780",
lastDonation:"2024-10-15",
rare:"Yes"
},

{
name:"Siva",
blood:"AB-",
city:"Coimbatore",
address:"RS Puram, Coimbatore",
contact:"9345612345",
lastDonation:"2025-01-20",
rare:"Yes"
}

];


// Show donors eligible after 90 days

function loadAvailableDonors(){

let table=document.getElementById("availableDonors")

let today=new Date()

table.innerHTML = `
<tr>
<th>Name</th>
<th>Blood Group</th>
<th>City</th>
<th>Address</th>
<th>Contact</th>
<th>Last Donation</th>
<th>Rare Blood</th>
</tr>
`

donorDetails.forEach(d=>{

let lastDate=new Date(d.lastDonation)

let diffDays=(today-lastDate)/(1000*60*60*24)

if(diffDays>=90){

table.innerHTML += `
<tr>
<td>${d.name}</td>
<td>${d.blood}</td>
<td>${d.city}</td>
<td>${d.address}</td>
<td>${d.contact}</td>
<td>${d.lastDonation}</td>
<td>${d.rare}</td>
</tr>
`

}

})

}

loadAvailableDonors()



// Search donor by blood group and city

function search(){

let blood=document.getElementById("blood").value
let city=document.getElementById("city").value.toLowerCase()

let table=document.getElementById("results")

table.innerHTML = `
<tr style="${d.rare=='Yes'?'background:#ffdddd':''}">
<th>Name</th>
<th>Blood</th>
<th>City</th>
<th>Address</th>
<th>Contact</th>
<th>Last Donation</th>
<th>Rare Blood</th>
</tr>
`

let filtered = donorDetails.filter(d =>
(d.blood==blood || blood=="") &&
(d.city.toLowerCase().includes(city))
)

filtered.forEach(d => {

table.innerHTML += `
<tr>
<td>${d.name}</td>
<td>${d.blood}</td>
<td>${d.city}</td>
<td>${d.address}</td>
<td>${d.contact}</td>
<td>${d.lastDonation}</td>
<td>${d.rare}</td>
</tr>
`

})

}