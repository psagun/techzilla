import { React } from "react";

// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";

const SignIn = (props) => {
	return (
		<div style={styles.container}>
			<input
				name="username"
				onChange={(e) => {
					e.persist();
					props.updateFormState(e);
				}}
				style={styles.input}
				placeholder="username"
			/>
			<input
				type="password"
				name="password"
				onChange={(e) => {
					e.persist();
					props.updateFormState(e);
				}}
				style={styles.input}
				placeholder="password"
			/>
			<button style={styles.button} onClick={props.signIn}>
				Sign In
			</button>
		</div>
	);
	// const useStyles = makeStyles((theme) => ({
	// 	paper: {
	// 		marginTop: theme.spacing(8),
	// 		display: "flex",
	// 		flexDirection: "column",
	// 		alignItems: "center",
	// 	},
	// 	avatar: {
	// 		margin: theme.spacing(1),
	// 		backgroundColor: theme.palette.secondary.main,
	// 	},
	// 	form: {
	// 		width: "100%", // Fix IE 11 issue.
	// 		marginTop: theme.spacing(1),
	// 	},
	// 	submit: {
	// 		margin: theme.spacing(3, 0, 2),
	// 	},
	// }));

	// const classes = useStyles();

	// return (
	// 	<Container component="main" maxWidth="xs">
	// 		<CssBaseline />
	// 		<div className={classes.paper}>
	// 			<Avatar className={classes.avatar}>
	// 				<LockOutlinedIcon />
	// 			</Avatar>
	// 			<Typography component="h1" variant="h5">
	// 				Sign in
	// 			</Typography>
	// 			<form className={classes.form} noValidate>
	// 				<TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
	// 				<TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
	// 				<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
	// 				<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
	// 					Sign In
	// 				</Button>
	// 				<Grid container>
	// 					<Grid item xs>
	// 						<Link href="#" variant="body2">
	// 							Forgot password?
	// 						</Link>
	// 					</Grid>
	// 					<Grid item>
	// 						<Link href="#" variant="body2">
	// 							{"Don't have an account? Sign Up"}
	// 						</Link>
	// 					</Grid>
	// 				</Grid>
	// 			</form>
	// 		</div>
	// 	</Container>
	// );
};

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		marginTop: 150,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		height: 45,
		marginTop: 8,
		width: 300,
		maxWidth: 300,
		padding: "0px 8px",
		fontSize: 16,
		outline: "none",
		border: "none",
		borderBottom: "2px solid rgba(0, 0, 0, .3)",
	},
	button: {
		backgroundColor: "#006bfc",
		color: "white",
		width: 316,
		height: 45,
		marginTop: 10,
		fontWeight: "600",
		fontSize: 14,
		cursor: "pointer",
		border: "none",
		outline: "none",
		borderRadius: 3,
		boxShadow: "0px 1px 3px rgba(0, 0, 0, .3)",
	},
	footer: {
		fontWeight: "600",
		padding: "0px 25px",
		textAlign: "center",
		color: "rgba(0, 0, 0, 0.6)",
	},
	anchor: {
		color: "#006bfc",
		cursor: "pointer",
	},
};

export default SignIn;
