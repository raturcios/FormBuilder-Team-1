Parse.initialize("uDZW6fgxe66aoyM44PhFdb63vL2tBAlV4L0VIOjp", "uRc7k4h2HMFsqPLc5PFsi237t15MvgohBu6LGlx3");
//confirm(document.getElementById("render").value);
var TestObject1 = Parse.Object.extend("TestObject");
var testObject = new TestObject1();
testObject.save({foo: "bar1"}).then(function(object) {
    alert("yay! it worked");
});