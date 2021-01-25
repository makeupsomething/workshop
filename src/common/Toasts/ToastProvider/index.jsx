import React, { createContext } from 'react';

const ToastContext = createContext(null);
ToastContext.displayName = 'ToastContext';

const ToastProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(
		(state, action) => {
			switch (action.type) {
				case 'addToast': {
					return {
						...state,
						toasts: [{ ...action.payload }, ...state.toasts],
					};
				}
				case 'removeToast': {
					return {
						...state,
						toasts: state.toasts.filter(
							(t) => t.id !== action.payload,
						),
					};
				}
				default: {
					throw new Error(`Unhandled action type: ${action.type}`);
				}
			}
		},
		{ toasts: [] },
	);

	return (
		<ToastContext.Provider value={[state, dispatch]}>
			{children}
		</ToastContext.Provider>
	);
};

function useToast() {
	const context = React.useContext(ToastContext);
	if (context === undefined) {
		throw new Error(
			`useNotification must be used within a NotificationProvider`,
		);
	}
	return context;
}

const addToast = (dispatch, toast) =>
	dispatch({ type: 'addToast', payload: toast });

const removeToast = (dispatch, id) =>
	dispatch({ type: 'removeToast', payload: id });

export { ToastContext, useToast, addToast, removeToast };
export default ToastProvider;
