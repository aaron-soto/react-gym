import React from 'react';

export const CookiesConsent = () => {
	return (
		<div className='col-md-4 col-sm-12 button-fixed-cookies'>
			<div className='p-3 pb-4 bg-custom-cookies text-white'>
				<div className='row'>
					<div className='col-10'>
						<h3 className='text-light'>Allow Cookies</h3>
					</div>
					<div className='col-2 text-center'>
						<i className='fas fa-times'></i>
					</div>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<button type='button' className='btn w-100 text-light'>
					Accept Cookies
				</button>
			</div>
		</div>
	);
};
