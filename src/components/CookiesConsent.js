import React from 'react';

export const CookiesConsent = () => {
	return (
		<div class='col-md-4 col-sm-12 button-fixed-cookies'>
			<div class='p-3 pb-4 bg-custom-cookies text-white'>
				<div class='row'>
					<div class='col-10'>
						<h3 className='text-light'>Allow Cookies</h3>
					</div>
					<div class='col-2 text-center'>
						<i class='fas fa-times'></i>
					</div>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<button type='button' class='btn w-100 text-light'>
					Accept Cookies
				</button>
			</div>
		</div>
	);
};
