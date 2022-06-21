


function generateHtml(employeeArray) {
    let htmlCards = `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TeamProfileGenerator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
    </head>
    <body>
    <!-- NAV BAR -->
    <nav class="navbar" style="background: linear-gradient(#753c07, #f17d7d)">
        <header class="h1 p-4 mx-auto text-white"> My Team </header>
    </nav>`

    for (let i = 0; i < employeeArray.length; i++) {
        htmlCards += `
        
    <div class="col p-3">
        <div class="card mb-3 shadow p-3 mb-5 rounded" style="max-width: 18rem; background-color:#dee8ec;">
            <div class="card-header h3 text-white bg-primary" style="background: linear-gradient(#753c07, #f17d7d)"> ${employeeArray[i].name} 
            <br> 
            <span class="h5"> ${employeeArray[i].getRole()} </span>
            </div>
                <div class="card-body">
                <p class="card-text">
                  <div class="border p-1">
                    ID: ${employeeArray[i].employeeId} 
                  </div> 
                  <div class="border p-1">
                    Email: <a href=mailto:${employeeArray[i].email}> ${employeeArray[i].email} </a>
                  </div> 
                  <div class="border p-1">
                    ${employeeArray[i].name}
                  </div> 
                </p>
                </div>
            </div>
        </div>`
    }
    return `
    ${htmlCards} 
    </div>
    </body>
    
    </html>`;
}




module.exports = generateHtml