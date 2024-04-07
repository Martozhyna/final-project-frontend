const UserStatistics = ({ user, userStatistic }) => {

    const statistics = userStatistic;

    if (!statistics) {
        return <div>Loading...</div>;
    }

    const userData = statistics[user.id];

    return (
        <div>
            {userData && (
                <>
                    <div>Total: {userData.total}</div>
                    <div>Agree: {userData.agree}</div>
                    <div>Disagree: {userData.disagree}</div>
                    <div>In work: {userData.in_work}</div>
                    <div>Dubbing: {userData.dubbing}</div>
                    <div>New: {userData.new}</div>
                </>
            )}
        </div>
    );
};

export { UserStatistics };
