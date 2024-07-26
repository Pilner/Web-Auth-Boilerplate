import NextAuth, { User, type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt'
	},
	providers: [
		CredentialsProvider({
			name: 'Username',
			credentials: { // Change this to your own credentials (e.g. Email+Password, Phone+PIN, etc.)
				username: { label: 'Username', type: 'text'},
				password: { label: 'Password', type: 'password'}
			},
			async authorize(credentials) {
				console.log(credentials);
				try {
					// Handle Authorization
					// Example: Fetch user from DB
					const user: User = {
						id: '1',
						name: 'Test User',
						email: 'test@test.com',
					};

					if (user) {
						// Don't forget to do validation (e.g. Hash Password)
						
						return user;

					} else {
						throw new Error('Invalid Credentials');
					}

				} catch (error) {
					return null;
				}
			}
		})
	],
	pages: {
		// signIn: '/signin', // Your custom Sign In page
	},
	// This is where you can modify the session and JWT token
	callbacks: {
		session: ({session, token}) => {
			return {
				...session,
				user: {
					...session.user,
					id: token.id, // Change id into your User ID Name from your DB
				}
			}
		},
		jwt: ({token, user}) => {
			if (user) {
				const u = user as unknown as User;
				return {
					...token,
					id: u.id // Change id into your User ID Name from your DB
				}
			}
			return token;
		}
	}
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };