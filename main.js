
function startClassifictaion()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/p3uhWn-6A/model.json', modelReady);

}
function modelReady(){

    classifier.classify(gotResults);
}
