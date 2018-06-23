var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

// require all test files (files that ends with .spec.js)
var testsContext = require.context('./', true, /\.spec$/);
testsContext.keys().forEach(testsContext);  //  testsContext.keys() is an array

