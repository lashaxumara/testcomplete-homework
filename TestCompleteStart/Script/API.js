function httpGetRequest()
{
var address = "http://www.boredapi.com/api/activity?key=5881028";
var aqHttpRequest = aqHttp.CreateGetRequest(address);
var aqHttpResponse = aqHttpRequest.Send();
aqHttpResponse.SaveToFile(Project.Path+"body.txt")
return "5881028";
}

function httpGetRequestAct()
{
var address = "http://www.boredapi.com/api/activity?type=music";
var aqHttpRequest = aqHttp.CreateGetRequest(address);
var aqHttpResponse = aqHttpRequest.Send();
aqHttpResponse.SaveToFile(Project.Path+"body2.txt")
return "Have a jam session with your friends";

}
module.exports.httpGetRequest = httpGetRequest;
module.exports.httpGetRequestAct = httpGetRequestAct;