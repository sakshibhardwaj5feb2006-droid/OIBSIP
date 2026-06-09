function convertTemp(){

    let temp = parseFloat(document.getElementById("temp").value);
    let unit = document.getElementById("unit").value;
    let result = "";

    if(isNaN(temp)){
        result = "Please enter a valid number";
    }

    else if(unit === "celsius"){

        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;

        result =
        `${temp}°C = ${f.toFixed(2)}°F | ${k.toFixed(2)}K`;
    }

    else if(unit === "fahrenheit"){

        let c = (temp - 32) * 5/9;
        let k = c + 273.15;

        result =
        `${temp}°F = ${c.toFixed(2)}°C | ${k.toFixed(2)}K`;
    }

    else if(unit === "kelvin"){

        let c = temp - 273.15;
        let f = (c * 9/5) + 32;

        result =
        `${temp}K = ${c.toFixed(2)}°C | ${f.toFixed(2)}°F`;
    }

    document.getElementById("result").innerHTML = result;
}
