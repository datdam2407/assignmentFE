// import PropTypes from 'prop-types';
// import React from 'react';
// import SweetAlert from 'sweetalert2';

// class Alert extends React.Component {
// 	static propTypes = {
// 		allowEnterKey : PropTypes.bool,
// 		allowEscapeKey : PropTypes.bool,
// 		allowOutsideClick : PropTypes.bool,
// 		animation : PropTypes.bool,
// 		backdrop : PropTypes.bool,
// 		background : PropTypes.string,
// 		buttonsStyling : PropTypes.bool,
// 		cancelButtonClass : PropTypes.string,
// 		cancelButtonColor : PropTypes.string,
// 		cancelButtonText : PropTypes.string,
// 		confirmButtonClass : PropTypes.string,
// 		confirmButtonColor : PropTypes.string,
// 		confirmButtonText : PropTypes.string,
// 		customClass : PropTypes.string,
// 		focusCancel : PropTypes.bool,
// 		focusConfirm : PropTypes.bool,
// 		footer : PropTypes.string,
// 		heightAuto : PropTypes.bool,
// 		html : PropTypes.string,
// 		input : PropTypes.oneOf(
// 			[
// 				'checkbox',
// 				'email',
// 				'file',
// 				'number',
// 				'password',
// 				'radio',
// 				'range',
// 				'select',
// 				'tel',
// 				'text',
// 				'textarea',
// 				'url',
// 			]
// 		),
// 		inputAttributes : PropTypes.object,
// 		inputAutoTrim : PropTypes.bool,
// 		inputClass : PropTypes.string,
// 		inputOptions : PropTypes.object,
// 		inputPlaceholder : PropTypes.string,
// 		inputValidator : PropTypes.func,
// 		inputValue : PropTypes.string,
// 		onBeforeOpen : PropTypes.func,
// 		onCancel : PropTypes.func,
// 		onClose : PropTypes.func,
// 		onConfirm : PropTypes.func,
// 		onConfirmOrDismiss : PropTypes.func,
// 		onDismiss : PropTypes.func,
// 		onEscape : PropTypes.func,
// 		onOpen : PropTypes.func,
// 		onOutsideClick : PropTypes.func,
// 		padding : PropTypes.string,
// 		preConfirm : PropTypes.func,
// 		position : PropTypes.oneOf(
// 			[
// 				'bottom',
// 				'bottom-end',
// 				'bottom-start',
// 				'center',
// 				'center-end',
// 				'center-start',
// 				'top',
// 				'top-end',
// 				'top-start',
// 			]
// 		),
// 		reverseButtons : PropTypes.bool,
// 		show : PropTypes.bool,
// 		showCancelButton : PropTypes.bool,
// 		showCloseButton : PropTypes.bool,
// 		showConfirmButton : PropTypes.bool,
// 		stopKeydownPropagation : PropTypes.bool,
// 		showLoaderOnConfirm : PropTypes.bool,
// 		text : PropTypes.string,
// 		title : PropTypes.string,
// 		type : PropTypes.oneOf(
// 			[
// 				'info',
// 				'error',
// 				'question',
// 				'success',
// 				'warning',
// 			]
// 		),
// 		width : PropTypes.string,
// 	};
	
// 	static defaultProps = {
// 		allowEnterKey : true,
// 		allowEscapeKey : true,
// 		allowOutsideClick : true,
// 		animation : true,
// 		backdrop : true,
// 		background : null,
// 		buttonsStyling : true,
// 		cancelButtonClass : null,
// 		cancelButtonColor : '#999999',
// 		cancelButtonText : 'Cancel',
// 		confirmButtonClass : null,
// 		confirmButtonColor : '#5B6ABF',
// 		confirmButtonText : 'OK',
// 		customClass : null,
// 		focusCancel : false,
// 		focusConfirm : true,
// 		footer : null,
// 		heightAuto : true,
// 		html : null,
// 		input : null,
// 		inputAttributes : {},
// 		inputAutoTrim : true,
// 		inputClass : null,
// 		inputOptions : {},
// 		inputPlaceholder : '',
// 		inputValidator : null,
// 		inputValue : '',
// 		onBeforeOpen : null,
// 		onCancel : null,
// 		onClose : null,
// 		onConfirm : null,
// 		onConfirmOrDismiss : null,
// 		onDismiss : null,
// 		onEscape : null,
// 		onOpen : null,
// 		onOutsideClick : null,
// 		padding : null,
// 		position : 'center',
// 		preConfirm : null,
// 		reverseButtons : false,
// 		show : false,
// 		showCancelButton : false,
// 		showCloseButton : false,
// 		showConfirmButton : true,
// 		showLoaderOnConfirm : false,
// 		stopKeydownPropagation : true,
// 		text : null,
// 		title : null,
// 		type : null,
// 		width : null,
// 	};
	
// 	componentDidMount() {
// 		this.createAlert();
// 	}
	
// 	componentDidUpdate(prevProps, prevState, snapshot) {
// 		this.createAlert();
// 	}
	
// 	createAlert() {
// 		if (!this.props.show) { return; }
//     let props = JSON.parse(JSON.stringify(this.props));
// 		delete props.onCancel;
// 		delete props.onConfirm;
// 		delete props.onConfirmOrDismiss;
// 		delete props.onDismiss;
// 		delete props.onEscape;
// 		delete props.onOutsideClick;
// 		delete props.show;
// 		if (this.props.onOpen) { props.onOpen = this.props.onOpen; }
// 		if (this.props.onBeforeOpen) { this.props.onBeforeOpen(); }
// 		// SweetAlert(
// 		// 	{...props}
// 		// ).then(result => {
// 		// 	if (result.hasOwnProperty('dismiss')) {
// 		// 		const dismissalType = result['dismiss'];
// 		// 		if (this.props.onCancel && dismissalType === 'cancel') { this.props.onCancel(); }
// 		// 		if (this.props.onClose && dismissalType === 'close') { this.props.onClose(); }
// 		// 		if (this.props.onEscape && dismissalType === 'esc') { this.props.onEscape(); }
// 		// 		if (this.props.onOutsideClick && dismissalType === 'overlay') { this.props.onOutsideClick(); }
// 		// 		if (this.props.onDismiss) { this.props.onDismiss(dismissalType); }
// 		// 	}
// 		// 	if (result.hasOwnProperty('value') && this.props.onConfirm) { this.props.onConfirm(result); }
// 		// 	if (this.props.onConfirmOrDismiss) { this.props.onConfirmOrDismiss(result); }
// 		}
	
// 	render() { return null; }
// }

// export default Alert;