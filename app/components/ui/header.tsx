import React from 'react';
import {auth, signIn, signOut} from "../../../auth";
import Link from "next/link";
import google from 'next-auth/providers/google';
type Props = {}
const Header = async (props: Props) => {
    const session = await auth();
    console.log(session);
    return (
        <header><nav>
            <div><div>
                {
                    session?.user? (
                        <div>
                            <h2>{session.user.name}</h2>
                            <Link href="/api/auth/signout">
                                <button>Sign Out</button>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <Link href="/api/auth/signin">
                                <button>Sign In</button>
                            </Link>
                         
                        </div>
                    )
                }
            </div></div>
        </nav></header>
    );
}
export default Header;
