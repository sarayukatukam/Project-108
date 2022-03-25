function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

Barking = 0;
Meow = 0;
Roar = 0;
Moo = 0;

function gotResults(error, results)
{
    if (error) 
    {
        console.error(error);
    }

    else 
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById('dog');
        img1 = document.getElementById('meow-cat');
        img2 = document.getElementById('Lion');
        img3 = document.getElementById('cow');

        if (results[0].label == "Barking") 
        {
            img.src = 'dog.png';
            dog = dog + 1;
        }

        else if (results[0].label == "Meow") 
        {
            img1.src = 'meow-cat.gif';
            cat = cat + 1;
        }

        else if (results[0].label == "Roar") 
        {
            img2.src = 'Lion.JPG';
            lion = lion + 1;
        }

        else (results[0].label == "moo") 
        {
            img3.src = 'cow.jpg';
            lion = lion + 1;
        }
    }
}