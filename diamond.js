const stars = function (n) {
     let a = ' ';
     for (let i = 0; i <= n; i = i+1)
	 { a = a + '*';
	 }
	 return a;
};

const spaces = function (n) {
     let b = ' ';
	 for (let i = 0; i <= n; i = i + 1)
	 { b = b + ' '
	 }
	 return b;
};

const diamond = function (n) {
     if (n%2 === 0) {
	 n = n + 1;
	 }
	 for (let i = 0; i <= n; i = i + 2)
	 { console.log (spaces((n-i)/2) + stars(i));
	 }
	 for (let i = n - 2; i >= 1; i = i - 2)
	 { console.log (spaces((n-i)/2) + stars(i-1));
	 }
};
diamond (10)
