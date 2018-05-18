		var audio = [{
		        Title: 'Dylan',
		        Author: 'Bob Dylan',
		        Genre: 'rock',
		        Minutes: 34,
		        Publisher: 'Columbia Records',
		        Description: 'Dylan is the 13th studio album by American singer-songwriter Bob Dylan, released on November 19, 1973 by Columbia Records. Compiled and issued by the label with no input from Dylan himself, it contains no original Dylan songs, the material consisting of two outtakes from Self Portrait and another seven from New Morning. It followed the artists departure from Columbia for Asylum Records, and the announcement of his first major tour since 1966. ',
		        img: "imgs/Bob_Dylan.jpg"
		    },
		    {
		        Title: 'Diamond Life',
		        Author: 'Sade',
		        Genre: 'smooth soul',
		        Minutes: 45,
		        Publisher: 'Epic',
		        Description: 'Diamond Life is the debut studio album by English band Sade.It was first released in the United Kingdom on 16 July 1984 by Epic Records and in the United States on 27 February 1985 by Portrait Records.Diamond Life went on to sell over six million copies worldwide, becoming one of the top - selling debut recordings of the 80s and the best-selling debut by a British female vocalist',
		        img: "imgs/sade-diamond-life.jpg"

		    },

		];

		var movies = [{
		        Title: 'City lights',
		        Author: 'Charlie Chaplin',
		        Genre: 'romantic comedy',
		        Minutes: 87,
		        Publisher: 'United Artists ',
		        Description: 'City Lights is a 1931 American pre-Code silent romantic comedy film written, produced, directed by and starring Charlie Chaplin. The story follows the misadventures of Chaplins Tramp as he falls in love with a blind girl (Virginia Cherrill) and develops a turbulent friendship with an alcoholic millionair(Harry Myers).',
		        img: "imgs/citylights.jpg"

		    },
		    {
		        Title: 'Lawrence of Arabia',
		        Author: 'T.E.Lawrence',
		        Genre: 'historical drama',
		        Minutes: 222,
		        Publisher: 'Columbia Pictures',
		        Description: 'Lawrence of Arabia is a 1962 epic historical drama film based on the life of T. E. Lawrence. It was directed by David Lean and produced by Sam Spiegel through his British company Horizon Pictures, with the screenplay by Robert Bolt and Michael Wilson. The film stars Peter OToole in the title role.It is widely considered one of the greatest and most influential films in the history of cinema.',
		        img: "imgs/Lawrence.jpg"

		    },


		];

		var books = [

		    {
		        Title: 'Woodwalkers',
		        Author: 'Katja Brandis',
		        Genre: 'belletristik',
		        Publisher: 'Bild',
		        Weight: '1 kg',
		        Description: 'Auf den ersten Blick sieht Carag aus wie ein normaler Junge. Doch hinter seinen leuchtenden Augen verbirgt sich ein Geheimnis: Carag ist ein Gestaltwandler. Aufgewachsen als Berglöwe in den Wäldern lebt er erst seit Kurzem in der Menschenwelt. Das neue Leben ist für ihn so fremd wie faszinierend.',
		        img: "imgs/woodwalkers.jpg"

		    },

		    {
		        Title: 'Foundation',
		        Author: 'Isaac Asimov',
		        Genre: 'fantasy science fiction',
		        Publisher: 'Heyne',
		        Weight: '2 kg',
		        Description: 'Foundation is a science fiction novel by American writer Isaac Asimov. It is the first published in his Foundation Trilogy (later expanded into the Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire.',
		        img: "imgs/fondation-asimov.jpg"

		    },
		    {

		        Title: 'The Sandman',
		        Author: 'Neil Gaiman',
		        Genre: 'fantasy',
		        Publisher: 'Vertigo',
		        Weight: '0.6 kg',
		        Description: 'The Sandman is a book series written by Neil Gaiman and published by DC Comics.   It tells the story of Dream of the Endless, who rules over the world of dreams. The original series ran for 75 issues from January 1989 to March 1996. The series is famous for Gaimans trademark use of anthropomorphic personification of various metaphysical entities, while also blending mythology and history in its horror setting within the DC Universe.',
		        img: "imgs/Sandman.jpg"

		    },

		];
		var comic = [		
		    {
		        Title: 'Modesty Blaise',
		        Author: 'Peter ODonnell',
		        Genre: 'mystery',
		        Publisher: 'Titan Books',
		        Description: 'Modesty Blaise is a British comic strip featuring a fictional character of the same name, created by author Peter ODonnell and illustrator Jim Holdaway in 1963. The strip follows Modesty Blaise, an exceptional young woman with many talents and a criminal past, and her trusty sidekick Willie Garvin',
		        img: "imgs/modesty1.jpg"

		    },

		];

		var lib1 = [audio, movies];
		var lib2 = [books];
		var lib3 = [comic];

		for (var i = 0; i < audio.length; i++) {
		    document.write("<div class=\"classAudio\">");
		    document.write("<b>" + "Title: " + "</b>" + audio[i].Title + "<br>");
		    document.write("<b>" + "Author: " + "</b>" + audio[i].Author + "<br>");
		    document.write("<b>" + "Genre: " + "</b>" + audio[i].Genre + "<br>");
		    document.write("<b>" + "Publisher: " + "</b>" + audio[i].Publisher + "<br>");
		    document.write("<b>" + "Description: " + "</b>" + audio[i].Description + "<br>");
		    document.write('<img src="' + audio[i].img + '">' + '<br>');
		    document.write('<br>');
		    document.write('<br>');

		    // I want to achieve: 
		    //    <button onclick="..." >Buy it</button>
		    // document.write('<button onclick="buyIt(' + i + ')">Buy it</button>');

		    document.write("</div>");
		}

		for (var i = 0; i < movies.length; i++) {
		    document.write("<div class=\"classMovies\">");
		    document.write("<b>" + "Title: " + "</b>" + movies[i].Title + "<br>");
		    document.write("<b>" + "Author: " + "</b>" + movies[i].Author + "<br>");
		    document.write("<b>" + "Genre: " + "</b>" + movies[i].Genre + "<br>");
		    document.write("<b>" + "Publisher: " + "</b>" + movies[i].Publisher + "<br>");
		    document.write("<b>" + "Description: " + "</b>" + movies[i].Description + "<br>");
		    document.write('<img src="' + movies[i].img + '">' + '<br>');
		    document.write('<br>');
		    document.write('<br>');

		    // I want to achieve: 
		    //    <button onclick="..." >Buy it</button>
		    // document.write('<button onclick="buyIt(' + i + ')">Buy it</button>');

		    document.write("</div>");
		}

		for (var i = 0; i < books.length; i++) {
		    document.write("<div class=\"classBooks\">");
		    document.write("<b>" + "Title: " + "</b>" + books[i].Title + "<br>");
		    document.write("<b>" + "Author: " + "</b>" + books[i].Author + "<br>");
		    document.write("<b>" + "Genre: " + "</b>" + books[i].Genre + "<br>");
		    document.write("<b>" + "Publisher: " + "</b>" + books[i].Publisher + "<br>");
		    document.write("<b>" + "Description: " + "</b>" + books[i].Description + "<br>");
		    document.write('<img src="' + books[i].img + '">' + '<br>');
		    document.write('<br>');
		    document.write('<br>');

		    // I want to achieve: 
		    //    <button onclick="..." >Buy it</button>
		    // document.write('<button onclick="buyIt(' + i + ')">Buy it</button>');

		    document.write("</div>");
		}


		for (var i = 0; i < comic.length; i++) {
		    document.write("<div class=\"classComic\">");
		    document.write("<b>" + "Title: " + "</b>" + comic[i].Title + "<br>");
		    document.write("<b>" + "Author: " + "</b>" + comic[i].Author + "<br>");
		    document.write("<b>" + "Genre: " + "</b>" + comic[i].Genre + "<br>");
		    document.write("<b>" + "Publisher: " + "</b>" + comic[i].Publisher + "<br>");
		    document.write("<b>" + "Description: " + "</b>" + comic[i].Description + "<br>");
		    document.write('<img src="' + comic[i].img + '">' + '<br>');
		    document.write('<br>');
		    document.write('<br>');

		    // I want to achieve: 
		    //    <button onclick="..." >Buy it</button>
		    // document.write('<button onclick="buyIt(' + i + ')">Buy it</button>');

		    document.write("</div>");
		}







		/*
				    document.write("<div class=\"classMovies\">");
				    document.write("<b>" + "Title: " + "</b>" + movies[i].Title + "<br>");
				    document.write("<b>" + "Author: " + "</b>" + movies[i].Author + "<br>");
				    document.write("<b>" + "Genre: " + "</b>" + movies[i].Genre + "<br>");
				    document.write("<b>" + "Publisher: " + "</b>" + movies[i].Publisher + "<br>");
				    document.write("<b>" + "Description: " + "</b>" + movies[i].Description + "<br>");

				    document.write('<img src="' + movies[i].img + '">' + '<br>');

				    // I want to achieve: 
				    //    <button onclick="..." >Buy it</button>
				    // document.write('<button onclick="buyIt(' + i + ')">Buy it</button>');

				    document.write("</div>");





				    document.write("<div class=\"classBooks\">");
				    document.write("<b>" + "Title: " + "</b>" + books[i].Title + "<br>");
				    document.write("<b>" + "Author: " + "</b>" + books[i].Author + "<br>");
				    document.write("<b>" + "Genre: " + "</b>" + books[i].Genre + "<br>");
				    document.write("<b>" + "Publisher: " + "</b>" + books[i].Publisher + "<br>");
				    document.write("<b>" + "Weight: " + "</b>" + books[i].Weight + "<br>");
				    document.write("<b>" + "Description: " + "</b>" + books[i].Description + "<br>");

				    document.write('<img src="' + books[i].img + '">' + '<br>');

				    // I want to achieve: 
				    //    <button onclick="..." >Buy it</button>
				    // document.write('<button onclick="buyIt(' + i + ')">Buy it</button>');

				    document.write("</div>");

				};
		*/
		// var i = 0;
		// for (i = 0; i < Persons.length; i++) {
		//     document.getElementById("cont").innerHTML += "<div>" + " <img src = \" " + Persons[i].myPhoto + " \" > " + "<p>" + " Name: " + "<b>" + Persons[i].name + "</b>" + "<br>" + "<br>" + " surname: " + "<b>" + Persons[i].surname + '</b>' + "<br>" + "<br>" + " Age: " + "<b>" + Persons[i].age + "</b>" + "</p>" + " <input class=\"" + i + "-" + i + "\" type=\"submit\" value=\"Like\">" + "<h1 class = \" " + i + "\" class =\"heading\">" + Persons[i].likes + "</h1>" + "<img class=\"imgg\" src=\"CR5/like.png\">" + "</div>";


		//     $(document).ready(function() {
		//         var n = 0;
		//         $(".0-0").click(function() {
		//             var m = n + 1;

		//             $(".0").text(m);
		//         })
		//         $(".1-1").click(function() {
		//             var n = 0;
		//             n++
		//             $(".1").text(n);
		//         })
		//         //as much as the user click
		//         $(".2-2").click(function() {
		//             //var n = 0;
		//             n++
		//             $(".2").text(n);
		//         })
		//         $(".3-3").click(function() {
		//             var n = 0;
		//             n++
		//             $(".3").text(n);
		//         })

		//     });
		// };