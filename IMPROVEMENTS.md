Integrate with cucumber framework so that gherkin syntax can be used to detail test scenarios. This has the advantage of making the tests easier to read by non-technical stakeholders. 
Start each test with a clean browser session. This will ensure that the state of a test does not interfere with any subsequent tests.
Add some reporting to integrate with deployment pipelines.
Add screenshots for when tests fail to aid debugging.
Use properties file to store site URL's to make maintenance easier. These can then be accessed within the tests.
Add uitilities file to store common webdriverIO functions that can be shared. For example waiting for elements to load, getting browser url, scrolling to element etc....