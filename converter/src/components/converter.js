import React, { useState } from 'react';

export default function Converter() {
	const [form, setForm] = useState({
		value: '',
	});

	const handleValueChange = evt => {
		setForm(prevForm => ({ ...prevForm, value: evt.target.value }));
	}

	const hex2rgb = h => {
		let r = 0, g = 0, b = 0;
		if (h.length == 7) {
			r = "0x" + h[1] + h[2];
			g = "0x" + h[3] + h[4];
			b = "0x" + h[5] + h[6];
		}
		return "rgb(" + +r + "," + +g + "," + +b + ")";
	}

	const checkHex = hex => {
		const hexRegex = /^[#]*([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i
		if (hexRegex.test(hex)) {
			return true;
		} else {
			return false
		}
	}

	return (
		<form className={checkHex(form.value) === true || form.value.length < 7
			? 'wrapper'
			: 'wrapper active'
		}
			style={form.value.length === 7
				? { backgroundColor: hex2rgb(form.value) }
				: null
			}
		>
			<div className='container'>
				<input className='input' value={form.value} onChange={handleValueChange} />
				<input className='input'
					value={checkHex(form.value) === true || form.value.length < 7
						? hex2rgb(form.value)
						: 'Warning!'
					}
					style={checkHex(form.value) === true || form.value.length < 7
						? null
						: { backgroundColor: '#B22222', color: 'white' }
					}
				/>
			</div>
		</form >
	);
}