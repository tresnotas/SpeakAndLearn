app.factory("LessonsService", function($http, $sanitize, CSRF_TOKEN) {

	var sanitizeInput = function(lesson) {
		return {
			name: $sanitize(lesson.name),
			gender: $sanitize(lesson.gender),
			notes: $sanitize(lesson.notes),
			csrf_token: CSRF_TOKEN
		};
	};

	return {
		// Returns all lessons that belongs to the logged in user
		get: function(lessonID) {

			if (lessonID === undefined)
			{
				return $http.get('/lessons');
			}				
			else
			{
				return $http.get('/lessons/' + lessonID);
			}				
		},

		// Posts new user
		post: function(lesson) {
			var post = $http.post('/lesson', sanitizeInput(lesson));
			return post;
		}
	};
});