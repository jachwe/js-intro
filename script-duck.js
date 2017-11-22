var animals = [
	{
		name : "Duck",
		sound : "quack"
	},
	{
		name : "Cow",
		sound : "mooh"
	},
	{
		name : "Dog",
		sound : "woof"
	},
	{
		name : "Spider",
		sound : "shhhh"
	},
	{
		name : "Bat",
		sound : "nananananan"
	},
	{
		name : "Chicken",
		sound : "boakboak"
	},
	{
		name : "Horse",
		sound : "igogo"
	},
	{
		name : "Pig",
		sound : "oink"
	}
]


for( var i = 0; i < animals.length; i++){

	for( var r = 0; r < i + 1; r++){
		console.log( i+1 );
	}
	for( var r = 0; r < i + 1; r++){
		console.log( animals[i].name )
	}
	for( var r = 0; r < i + 1; r++){
		console.log( animals[i].sound )
	}
}