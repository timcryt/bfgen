function gencode() {
	var p = 0, st = input.value, o = '';
	for (var i = 0; i < st.length; i++) {
		var c = st.charCodeAt(i);
		if (c - p > 0) {
			for (var j = 0; j < c - p; j++) {
				o += '+';
			}
		} else {
			for (var j = 0; j < p - c; j++) {
				o += '-';
			}
		}
		o += '.';
		p = c;
	}
	output.value = o;
}
