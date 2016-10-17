const reverse = function(arr){

	const array=[];
		for(let i=0; i<arr.length;i= i+1)
		{
			array[i]=arr[arr.length-1 -i];
		} 
	
	return array;
};

const a=[1, 2, 3, 4, 5, 6, 7];
console.log(reverse(a));
