module.exports = {

    getMeta: function(og) {

        if (og.article) {
	        return {
	            date: og.article.published_time || og.article.modified_time
	        };
    	} else if (og.video) {
	        return {
	            date: og.video.release_date
	        };	
    	} else if (og.updated_time) {
	        return {
	            date: og.updated_time
	        };	
    	}
    }
};