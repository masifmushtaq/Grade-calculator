// let btn = document.getElementById('btn');

// btn.addEventListener("click", function () {

//     let math = parseInt(document.getElementById('math').value);
//     let eng = parseInt(document.getElementById('eng').value);
//     let urdu = parseInt(document.getElementById('urdu').value);
//     let bio = parseInt(document.getElementById('bio').value);
//     let chem = parseInt(document.getElementById('chem').value);

//     // check if any field is empty
//     if (  math == "" ||eng == "" || urdu == "" || bio == "" || chem == "") {
//         document.getElementById('alert').style.display = 'block';
//         setTimeout(function () {
//             document.getElementById("alert").style.display = "none";
//         }, 3000)
//     }
//     else {
//         if (math >= 100 || eng >= 100 || urdu >= 100 || bio >= 100 || chem >= 100) {
//             document.getElementById('alert').style.display = 'block';

            
//             setInterval(function () {
//                 document.getElementById("alert").style.display = "none";
//             }, 3000)


//             // empty the values
//             document.querySelector('#math').value = "";
//             document.querySelector('#eng').value = "";
//             document.querySelector('#urdu').value = "";
//             document.querySelector('#bio').value = "";
//             document.querySelector('#chem').value = "";
//         }
//         // obtain marks
//         else {
//             let sum = math + chem + urdu + eng + bio;
//             document.getElementById('obtain').innerText = sum;
//             // percentage of marks
//             let percentage = sum / 500 * 100;
//             document.getElementById('percentage').innerText = Math.ceil(percentage) + ("%");
//             // grade calculate
//             if (percentage >= 90) {
//                 document.getElementById('grade').innerText = "A+";

//             }
//             else if (percentage >= 80) {
//                 document.getElementById('grade').innerText = "A";
//             }
//             else if (percentage >= 70) {
//                 document.getElementById('grade').innerText = "B";
//             }

//             else if (percentage >= 60) {
//                 document.getElementById('grade').innerText = "c";
//             }

//             else if (percentage > 45) {
//                 document.getElementById('grade').innerText = "d";
//             }
//             else {
//                 document.getElementById("grade").innerText = "F";
//             }
//             if (percentage < 45) {
//                 document.getElementById('remarks').innerText = "Fail";
//                 document.getElementById('remarks').style.color = "red";
//                 document.getElementById('alert').style.display = "block";
//                 document.getElementById('msg').innerText = " Sorry Your are fail in exam....!";

//             }
//             else {
//                 document.getElementById('remarks').innerText = "Pass";
//                 document.getElementById('remarks').style.color = "green";
//                 document.getElementById('sucess').style.display = "block";
                
//             }
//             document.querySelector('#math').value = "";
//             document.querySelector('#eng').value = "";
//             document.querySelector('#urdu').value = "";
//             document.querySelector('#bio').value = "";
//             document.querySelector('#chem').value = "";
//         }


//     }


// })











let btn = document.getElementById("btn");

btn.addEventListener("click", function () {



    let math = document.querySelector("#math").value;
    let eng = document.querySelector("#eng").value;
    let urdu = document.querySelector("#urdu").value;
    let phy = document.querySelector("#bio").value;
    let chem = document.querySelector("#chem").value;

    // check the empty values
    if (Number(math) == "" || Number(eng) == "" || Number(urdu) == "" || Number(phy) == "" || Number(chem) == "") {
        document.getElementById("alert").style.display = "block";

        setTimeout(function () {
            document.getElementById("alert").style.display = "none";
        }, 3000)
    }
    else {

        // check value less then 100
        if (Number(math) > 100 || Number(eng) > 100 || Number(urdu) > 100 || Number(phy) > 100 || Number(chem) > 100) {
            document.getElementById("alert").style.display = "block";


            setInterval(function () {
                document.getElementById("alert").style.display = "none";
            }, 3000)
            // empty the values
            document.querySelector("#math").value = "";
            document.querySelector("#eng").value = "";
            document.querySelector("#urdu").value = "";
            document.querySelector("#bio").value = "";
            document.querySelector("#chem").value = "";
        }

        else {
            // obtain marks
            let sum = Number(math) + Number(eng) + Number(urdu) + Number(phy) + Number(chem);
            document.getElementById("obtain").innerText = sum;

            // percentage of marks
            let per = sum / 500 * 100;
            document.getElementById("per").innerText = Math.ceil(per) + ("%");

            // Grade according to percentage

            if (per >= 90) {
                document.getElementById("grade").innerText = "A+";
            }
            else if (per >= 80) {
                document.getElementById("grade").innerText = "A";
            }
            else if (per >= 70) {
                document.getElementById("grade").innerText = "B";
            }
            else if (per >= 60) {
                document.getElementById("grade").innerText = "C";
            }
            else if (per >= 45) {
                document.getElementById("grade").innerText = "D";
            }
            else {
                document.getElementById("grade").innerText = "F";
            }

            // remarks
            if (per < 45) {
                document.getElementById("remarks").innerText = "Fail";
                document.getElementById("remarks").style.color = "red";
                document.getElementById("alert").style.display = "block";
                document.getElementById("msg").innerText = "You are fail in exams...!";

            } else {
                document.getElementById("remarks").innerText = "Pass";
                document.getElementById("remarks").style.color = "green";
                document.getElementById("success").style.display = "block";
            }

            // empty the values
            document.querySelector("#math").value = "";
            document.querySelector("#eng").value = "";
            document.querySelector("#urdu").value = "";
            document.querySelector("#bio").value = "";
            document.querySelector("#chem").value = "";


        }


    }





})