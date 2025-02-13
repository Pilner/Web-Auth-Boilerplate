import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

export async function GET() {
	// Set headers
	let headers = {
		'Content-Type': 'application/json',
	};

	// Check if user is authenticated
	// Use this template to check if user is authenticated - API Calls
	const session = await getServerSession(authOptions);
	if (!session) {
		return new Response(
			JSON.stringify({
				status: 401,
				message: 'Not Authenticated',
			}),
			{ headers }
		);
	}

	return new Response(
		JSON.stringify({
			status: 200,
			message: 'Authenticated',
		}),
		{ headers }
	);
}
