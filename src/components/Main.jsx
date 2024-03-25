/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaGitHub, FaLinkedin } from "react-icons/fa";

export default function Main() {
	return (
		<div id="main">
			<img
				className="w-full h-screen object-cover object-left scale-x-[-1]"
				src="/src/assets/nature-bg.jpg"
				alt="background-image"
			/>

			<div className="w-full h-screen absolute top-0 left-0 bg-white/50">
				<div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
					<h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
						Hi, I'm Kyle Baker
					</h1>
					<h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
						I'm a
						<TypeAnimation
							sequence={[
								"passionate iOS Developer",
								2000,
								"creative web developer",
								2000,
								"film and cinematography lover",
								2000,
								"tech enthusiast",
								"",
							]}
							wrapper="div"
							cursor={true}
							repeat={Infinity}
							style={{ fontSize: "1em", paddingLeft: "5px" }}
						/>
					</h2>
				</div>
				<div>
					<FaGitHub className="cursor-pointer" size={20} />
					<FaLinkedin className="cursor-pointer" size={20} />
					<FaInstagram className="cursor-pointer" size={20} />
				</div>
			</div>
		</div>
	);
}
