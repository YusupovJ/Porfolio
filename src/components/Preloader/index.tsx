import React, { memo } from "react";
import { useAppSelector } from "src/helpers/hooks";
import { Logo, ProgressBar, Wrapper } from "./style";

interface Props {}

const Preloader: React.FC<Props> = (props) => {
	const preloader = useAppSelector((state) => state.preloader);

	return (
		<Wrapper active={preloader.active}>
			<Logo />
			<h4>Jamshid</h4>
			<p>Jamshid is thinking</p>
			<ProgressBar active={preloader.active} status={preloader.status}>
				<div></div>
			</ProgressBar>
		</Wrapper>
	);
};

export default memo(Preloader);
