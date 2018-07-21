/* tests within the $() function,
 * since some of these tests may require DOM elements
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    describe('RSS Feeds', () => {
        it('are defined', () =>{
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('Feed has a URL defined', () =>{
         	for (let feed of allFeeds){
				expect(feed.url).toBeDefined();
	         	expect(feed.url.length).not.toBe(0);
        	}
        });

        it('Feed has a name defined', () =>{
         	for (let feed of allFeeds){
				expect(feed.name).toBeDefined();
	         	expect(feed.name.length).not.toBe(0);
        	}
        });
    });

	describe('The menu', () => {
		let body = document.querySelector('body');

        it('Menu toggle', () => {
			expect(body).toHaveClass('menu-hidden');
        });

        it('Check if menu toggles visibility', () => {
        	//menu to show when clicked
			document.querySelector('.menu-icon-link').click();
			expect(body).not.toHaveClass('menu-hidden');
			//menu to hide when clicked again
			document.querySelector('.menu-icon-link').click();
			expect(body).toHaveClass('menu-hidden');
        });
    });

    describe('Initial Entries', () => {
        beforeEach((done) => {
        	loadFeed(0, done);
        })

        it('After loadFeed run check to see if entry', () => {
        	expect(document.querySelector('.feed')).toBeDefined();
        	//expect(feedFeed.childElementCount).toBeGreaterThan(0);
        	expect(document.querySelectorAll('.feed .entry').length).toBeGreaterThan(0);
        });

 	describe('New Feed Selection', () => {
 		let oldFeed;
 		let newFeed;

        beforeEach((done) => {
        	loadFeed(0, () => {
        		oldFeed = document.querySelector('.feed').innerHTML;

        		loadFeed(1, ()=> {
        			newFeed = document.querySelector('.feed').innerHTML;
		        	done();
		        });
		    });
		});

        it('New content added when updated', () => {
        	expect(newFeed).not.toBe(oldFeed);
        });
    });
	});
}());