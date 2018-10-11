/////////////////////////////////////////////////////////
// PART 1

/////////////////////////////////////////////////////////
// Show Profile Info


function showProfile(name, catchphrase, location) {
	console.log(`PROFILE: \n  Name: ${name}\n  Catchphrase: ${catchphrase}\n  Location: ${location}`);
}



/////////////////////////////////////////////////////////
// Display Likes
const interests = [
  'being annoying',
  'seeds',
  'staring at human food'
];

function showInterests(likes) {
	console.log('THINGS I LIKE: ');

	for (let like of likes) {
		console.log(`  ${like}`);
	}
}

/////////////////////////////////////////////////////////
// Display Favorites
const favorites = {
  'food': 'pebbles',
  'tree': 'palm',
  'quote': 'Bock bock bock'
};

function showFavorites(favList) {
	console.log('FAVORITES:');

	for (let [item, favorite] of Object.entries(favList)) {
		console.log(`  ${item}: ${favorite}`);
	}
}

/////////////////////////////////////////////////////////
// PART 2

/////////////////////////////////////////////////////////
// Add Transactions

const transactions = {};

function addTransaction(date, amount, object) {

  object[date] = amount;
  return object;
}

/////////////////////////////////////////////////////////
// Get Balance Status

function getBalanceStatus(balance) {

	if (balance < 0) {
		return 'YOU ARE OVERDRAWN';
	}
	else if (balance < 20) {
		return 'Warning! Your balance is almost 0!';
	}
	else if (balance >= 20) 
		return 'Normal';
}



/////////////////////////////////////////////////////////
// Calculate Current Balance

function getCurrentBalance(current, nextTransaction) {

	for (let value of Object.values(nextTransaction)) {
		current += value;
		if (current < 0) {
			current -= 25;
		}
	}

	return current;
}


/////////////////////////////////////////////////////////
// Show Account Activity

function showAcctActivity(current, history) {
	console.log('TRANSACTIONS:')
	for (let [date, amount] of Object.entries(history)) {
		console.log(`  ${date}: ${amount}`);
		}
	console.log(`CURRENT BALANCE: ${current}`);
	console.log(`CURRENT STATUS: ${getBalanceStatus(current)}`)

}



/////////////////////////////////////////////////////////
// Creating a User Object

const melon = {
	name: 'melonie', 
	catchphrase: 'mel mel mel',
	location: 'oakland',
	interests: interests,
	favorites: favorites,
	transactions: transactions,
	startingMeloncoinBalance: 1
}

// Add function to print user dashboard

function showDashboard(melonData) {

	showProfile(melonData.name, melonData.catchphrase, melonData.location);
	showInterests(melonData.interests);
	showFavorites(melonData.favorites);
	showAcctActivity(melonData.startingMeloncoinBalance, melonData.transactions);
}

/////////////////////////////////////////////////////////
// PART 3

// Add object that keeps track of premium members
const premiumMembers = {

	nelom : {
		email: 'nel@om.me',
		tier: 'gold'},
	shell : {
		email: 'sh@ell.by',
		tier: 'gold'},
	nardog : {
		email: 'nardog@sing.er',
		tier: 'silver'}
	}
// Add function to return emails of premium members

function getPremiumEmails(memberList) {

	const emailList = [];
	for (let [name, info] of Object.entries(memberList)) {
		// console.log(`User: ${name}\nEmail: ${info.email}`);
		emailList.push(info.email);
	}
	return emailList;
}


/////////////////////////////////////////////////////////
// PART 4

const fakeInternList = ['Kara', 'Sun-Ah', 'Kristi', 'Jo', 'Elle', 'Priyanka'];
const daysOfWeek = ['Sunday', 
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday'];

// Add function to assign interns to workdays
function getRandomIntern(internList) {
	const min = 0;
	const max = internList.length;
	return internList[Math.floor(Math.random() * max)];
}

function getInternSchedule(internList) {

	console.log('\n ------------SCHEDULE------------\n');
	daysOfWeek.forEach(function(day) {
		console.log(`${day}: ${getRandomIntern(internList)}`);
	});

}
// Add a function to generate customer support hours

