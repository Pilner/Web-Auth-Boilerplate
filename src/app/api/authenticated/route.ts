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
				message: 'Not Authenticated',
			}),
			{ headers, status: 401 }
		);
	}

	return new Response(
		JSON.stringify({
			message: 'Authenticated',
		}),
		{ headers, status: 200 }
	);
}
